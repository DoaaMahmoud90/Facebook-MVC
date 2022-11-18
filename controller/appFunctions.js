//const { render } = require('ejs');
const feedModel = require('../models/FEED.js');

const homePage = (req,res) => {
  res.redirect('/feed');
}

const feedFunction = (req,res) => {
  feedModel.find()
  .then(result => {
    res.render('feedPage', {
      allPosts : result
    });
  })
  .catch(err => {
    console.log(err);
    res.render('feedPage', {
      allPosts: []
    })
  })

}

const addFunction =(req,res) => {
  let newFeed = new feedModel(req.body);
  newFeed.save()
  .then( () => {
    res.redirect('/feed');
  })
  .catch(err => {
    console.log(err);
    res.redirect('feed');
  })
}

const showFunction = (req,res) => {
  feedModel.findById(req.params.id)
     .then((result) => {
       res.render('postPage', {
       result
      });
     })
     .catch( err =>{
      console.log(err);
      res.redirect('/');
    })

}

const editFunction = (req,res) => {
   feedModel.findById(req.params.id)
   .then(result =>{
     res.render('editPage', {
      result
    })
     })
   .catch(err => {
     res.redirect('/');
     console.log(err);
   })
}

const updateFunction = (req, res) => {
  let id = req.params.id;
  feedModel.findByIdAndUpdate(id, req.body)
  .then( () => {
    res.redirect('/feed');
  })
  .catch (err => {
    res.redirect('/');
    console.log(err);
  })
}

const deleteFunction =(req, res) => {
  feedModel.findByIdAndDelete(req.params.id)
     .then( () => {
       res.redirect('/feed');
     })
    .catch(err => {
      console.log(err);
     res.redirect('/feed');
    })
}

module.exports = {
  homePage,
  feedFunction,
  addFunction,
  showFunction,
  editFunction,
  updateFunction,
  deleteFunction
};



// const homePage = (req,res) => {
//   articleModel.find()
//   .then ( result => {
//   res.render("home", {
//     allArticles: result
//    })
//   })
//   .catch(err => {
//     res.render("home", {
//       allArticles: []
//      })
//   })
// }

// const createArticle = (req, res) => {
//   console.log(req.body);
//   let newArticle = new articleModel(req.body);
//   newArticle.save()
//   .then(() => {
//     res.redirect('/');
//   })
//   .catch(err => {
//     console.log(err);
//   })
  
// }

// const addArticle =(req, res) => {
//   res.render('newArticle')
// }

// const showArticle = (req,res) => {
//   articleModel.findById(req.params.id)
//   .then(result => {
//    res.render('articleInfo', {
//     result
//    })
//   })
//   .catch( err =>{
//     console.log(err);
//     res.redirect('/');
//   })
// }

// const editArticle =(req,res) => {
//   articleModel.findById(req.params.id)
//   .then(result =>{
//     res.render('articleEdit', {
//       result
//     });
//   })
//   .catch(err => {
//     res.redirect('/');
//   })
// }

// const updateArticle = (req, res) => {
//   articleModel.findByIdAndUpdate(req.params.id, req.body)
//   .then( ()=> {
//     res.redirect('/');
//   })
//   .catch(err => {
//     res.redirect('/');
//     })
// }

// const deleteArticle = (req,res) => {
//   articleModel.findByIdAndDelete(req.params.id)
//   .then( () => {
//     res.redirect('/');
//   })
//   .catch(err => {
//     console.log(err);
//     res.redirect('/');
//   })
// }
 


// module.exports = {homePage, 
//   createArticle,
//   addArticle,
//   showArticle,
//   editArticle, 
//   updateArticle,
//   deleteArticle};