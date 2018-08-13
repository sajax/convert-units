var metric
  , imperial;

metric = {
  'm/l': {
    name: {
      singular: 'Meter per Litre'
    , plural: 'Meters per Litre'
    }
  , to_anchor: 1
  }
  ,'km/l': {
    name: {
      singular: 'Kilometer per Litre'
    , plural: 'Kilometers per Litre'
    }
  , to_anchor: 1000
  }
  ,'l/100km': {
    name: {
      singular: 'Litre per 100km'
    , plural: 'Litres per 100km'
    }
  , to_anchor: 1/100000
  }
}

imperial = {
    'mpg': {
      name: {
        singular: 'Mile per Gallon'
      , plural: 'Miles per Gallon'
      }
    , to_anchor: 1
   }
   ,'mpig': {
     name: {
       singular: 'Mile per Gallon (UK)'
     , plural: 'Miles per Gallon (UK)'
     }
   , to_anchor: 1/(4.54609/3.785411784)
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'm/l'
    , ratio: 0.00235214583
    }
  , imperial: {
      unit: 'mpg'
    , ratio: 1/0.00235214583
    }
  }
};
