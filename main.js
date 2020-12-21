
    jQuery(function($) {
  var container = document.getElementById('build-wrap');

  var fields = [{
    label: 'first_name',
    attrs: {
      type: 'text'
    },
    icon: 'FN'
  },
  {
    label: 'last_name',
    attrs: {
      type: 'text'
    },
    icon: 'LN' 
  },
  {
    label: 'Email id',
    attrs: {
      type: 'text'
    },
    icon: '@' 
  },
  {
    label: 'Phone No.',
    attrs: {
      type: 'number'
    },
    icon: '123 ' 
  },
  {
    label: 'Company',
    attrs: {
      type: 'text'
    },
    icon: 'CN ' 
  },
  {
    label: 'Download Button',
    attrs: {
      type: 'button'
    },
    icon: 'DB' 
  }
];
  var templates = {
    starRating: function(fieldData) {
      return {
        field: '<span id="' + fieldData.name + '">',
        onRender: function() {
          $(document.getElementById(fieldData.name)).rateYo({
            rating: 3.6
          });
        }
      };
    }
  };
  
  $(container).formBuilder({
    templates,
    fields
  });
});
