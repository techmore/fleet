module.exports = {


  friendlyName: 'View transparency',


  description: 'Display "Transparency" page.',

  exits: {

    success: {
      viewTemplatePath: 'pages/transparency'
    }

  },


  fn: async function () {
    // Respond with view.
    return {showSecureframeBanner: this.req.param('utm_content') === 'secureframe'};

  }


};
