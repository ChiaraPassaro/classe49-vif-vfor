const app = new Vue(
  {
    el: '#app',
    data: {
      postsLiked: [
        1,
        0
      ],
      posts: [
              {
                  "id": 1,
                  "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                  "media": "600/300?image=171",
                  "author": {
                      "name": "Phil Mangione Mauri",
                      "image": null
                  },
                  "likes": 80,
                  "created": "06-25-2021"
              },
              {
                  "id": 2,
                  "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                  "media": "600/400?image=112",
                  "author": {
                      "name": "Sofia Perlari",
                      "image": "300/300?image=10"
                  },
                  "likes": 120,
                  "created": "09-03-2021"
              },
              {
                  "id": 3,
                  "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                  "media": "600/400?image=234",
                  "author": {
                      "name": "Chiara Passaro",
                      "image": "300/300?image=20"
                  },
                  "likes": 78,
                  "created": "05-15-2021"
              },
              {
                  "id": 4,
                  "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                  "media": "600/400?image=24",
                  "author": {
                      "name": "Luca Formicola",
                      "image": null
                  },
                  "likes": 56,
                  "created": "04-03-2021"
              },
              {
                  "id": 5,
                  "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                  "media": "600/400?image=534",
                  "author": {
                      "name": "Alessandro Sainato",
                      "image": "300/300?image=29"
                  },
                  "likes": 95,
                  "created": "03-05-2021"
              }
      ]
    },
    methods: {
      initials: function (name, index) {
        // console.log(index);
        // console.log(name);
        let initials = '';
        let splitName = name.split(' ');
        // console.log(splitName);
        // initials += splitName[0][0] + splitName[1][0];
        for (let i = 0; i < splitName.length; i++) {
          const element = splitName[i];
          initials += element[0];
        }
        // console.log(initials);
        return initials;
      },
      isLiked: function (index) {
        if (this.postsLiked.includes(index)) {
          return 'like-button--liked';
        }
        else {
          return '';
        }
      },
      addLike: function (index, event) {
        // console.log('index:', index);
        event.preventDefault();
        if (this.postsLiked.includes(index)) {


          let indexLike = this.postsLiked.indexOf(index);
          // console.log(indexLike);
          this.postsLiked.splice(indexLike, 1);
        } else {
          this.postsLiked.push(index);
        }
      }
    }
  }
);

// nomeArray.includes(quello che cerco)