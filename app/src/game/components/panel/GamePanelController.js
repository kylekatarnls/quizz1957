class GamePanelController {
  constructor(Questions, $timeout, $mdToast, $element, $scope, $compile) {
    this.$mdToast = $mdToast;
    this.$element = $element;
    this.Questions = Questions;
    this.question = undefined;
    this.points = undefined;
    this.ended = false;
    this.cursor = 0;
    this.winners = [];

    this._handleKeyPress = event => {
      $timeout(() => {
        this.handleKeyPress(event);
      });
    };
    angular.element(document).on('keypress', this._handleKeyPress);

    $scope.playSound = file => {
      this.playSound(file);
    };
    ['question', 'answer'].forEach(key => {
      $scope.$watch('$ctrl.' + key, html => {
        if (html) {
          setTimeout(() => {
            const element = angular.element($element[0].querySelector('.' + key));
            if (element.length) {
              element.html(html);

              $compile(element.contents())($scope);
            }
          }, 1);
        }
      });
    });
  }

  $onDestroy() {
    angular.element(document).off('keypress', this._handleKeyPress);
  }

  initQuestion() {
    this.cursor = this.Questions.getIndex() + 1;
    this.question = this.Questions.getQuestion();
    this.points = this.Questions.getPoints();
    this.pickATeam();
    this.transitionSound(this.Questions.getEntrySound());
  }

  transitionSound(sound) {
    if (sound) {
      this.playSound(sound, 35000);
    }
  }

  toast(text, toastClass) {
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent(text)
        .toastClass(toastClass)
        .position('top right')
        .hideDelay(3000)
    );
  }

  getAudio() {
    return this.$element.find('audio')[0];
  }

  playSound(file, duration) {
    const audio = this.getAudio();
    this.endTransition();
    audio.volume = 1;
    audio.src = './assets/mp3/' + file + '.mp3';
    audio.play();
    if (duration > 0) {
      this._transition = [setTimeout(() => {
        this.fadeOut(0, 4000);
      }, duration)];
    }
  }

  endTransition() {
    if (this._transition) {
      this._transition.forEach(transition => {
        clearTimeout(transition);
      });
    }
  }

  fadeOut(to = 0, duration = 2000, step = 50) {
    const audio = this.getAudio();
    this.endTransition();
    this._transition = [];
    for (let i = step; i <= duration; i += step) {
      this._transition.push(setTimeout(() => {
        const volume = 1 - (1 - to) * i / duration;
        if (volume < 0.01) {
          audio.pause();
        }

        audio.volume = volume;
      }, i));
    }
  }

  isLastQuestion() {
    return this.Questions.isLast();
  }

  getQuestionsCount() {
    return this.Questions.getCount();
  }

  nextQuestion() {
    this.answer = null;

    if (this.isLastQuestion()) {
      const teams = this.teams.slice().sort((a, b) => {
        return b.score - a.score;
      });
      const winner = teams[0];
      this.winners = [winner];
      for (let i = 1; i < teams.length && teams[i].score === winner.score; i++) {
        this.winners.push(teams[i]);
      }
      this.ended = true;

      return;
    }

    this.Questions.next();
    this.initQuestion();
  }

  handleKeyPress(event) {
    if (!this.enableKeyboard) {
      return;
    }

    if (event.keyCode === 97) {
      this.playSound('johnny-b-goode');

      return;
    }
    if (event.keyCode === 109) {
      this.fadeOut(0.5, 1000);

      return;
    }
    if (event.keyCode === 102) {
      this.fadeOut();

      return;
    }
    if (!this.started) {
      return;
    }

    if (event.keyCode === 115) {
      if (!this.answer) {
        this.answer = this.Questions.getAnswer();
        this.transitionSound(this.Questions.getExitSound());

        return;
      }

      this.nextQuestion();

      return;
    }

    if (event.keyCode === 13) {
      if (!this.answer) {
        this.team.score += this.points;
        this.answer = this.Questions.getAnswer();
        const exitSound = this.Questions.getExitSound();
        if (exitSound) {
          this.playSound(exitSound);
        }

        this.toast(`Bonne réponse ! ${this.team.name} remporte ${this.points} points.`, 'win');

        return;
      }

      this.nextQuestion();

      return;
    }

    if (~[101, 32].indexOf(event.keyCode)) {
      this.toast(`Mauvaise réponse ! ${this.team.name} perd la main.`, 'loose');
      this.pickATeam();
    }
  }

  pickATeam() {
    const teams = this.teams.slice().sort((a, b) => {
      return (a.score + 2) * Math.random() - (b.score + 2) * Math.random();
    });
    this.team = this.team === teams[0] ? teams[1] : teams[0];
  }

  getPoints() {
    return this.points;
  }
}

export default ['Questions', '$timeout', '$mdToast', '$element', '$scope', '$compile', GamePanelController];
