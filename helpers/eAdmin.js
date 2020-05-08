module.exports = {
    eAdmin: function(req, res, next){
      if(req.isAuthenticated() && req.user.eAdmin == 1){
        
        return next()
      }else{
        
        req.flash('error_msg', 'Você deve ser administrador para acessar esta rota.')
        res.redirect('/')
      }

    }
  }