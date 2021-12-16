const app = new Vue(
  {
    el: '#app',
    data: {
      message: 'Ciao',
      classTitle: 'text-center',
      counter: 3,
      menuVisibility: false,
      obj: {
        name: 'Pippo',
        age: 30
      },
      awesome: false,
      names: ['Michele', 'Fabio', 'Roberto'],
      links: [
        {
          name: 'Chi siamo',
          url: '....'
        },
        {
          name: 'Dove siamo',
          url: '....'
        },
        {
          name: 'Contatti',
          url: '....'
        }
      ]
    },
    methods: {
      printData: function() {
        console.log(10);
        return 10;
      },
      printData2: function() {
        console.log(11);
        return 11;
      },
      addNumber: function () {
        this.counter += 1;
      },
      isEven: function () {
        return (this.counter % 2 == 0);
      },
      showMenu: function () {
        if (this.menuVisibility == true) {
          this.menuVisibility = false;
        } else {
          this.menuVisibility = true;
        }
      }
    }
  }
);