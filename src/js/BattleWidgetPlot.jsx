import React, {PropTypes} from 'react';

function BattleWidgetPlot(props){
  const {level, maxUnit, width, height, color} = props;
  const widthImg = width * 0.66;
  const marginLeftImg = width * 0.17;
  const widthLoader = width * 0.80;
  const styleLoaderContainer = {
    width: width,
    height: height
  };
  const heightLoader = ( level * 100 ) / maxUnit + '%';
  const marginTopLoader = ( 100 - ( level * 100 ) / maxUnit ) * ( height / 100 );
  var styleLoader = {
    width: width * 0.8,
    marginLeft: width * 0.1,
    background: color,
    width: widthLoader,
    height: heightLoader,
    marginTop: marginTopLoader + '%'
  };
  const styleProfileImg = {
    width: widthImg,
    marginLeft: marginLeftImg,
    marginTop: - widthImg + marginTopLoader - 10
  };
  return <div className="loadercontainer" style={styleLoaderContainer}>
    <img src="img/profile.png" style={styleProfileImg}/>
    <div className="loader" style={styleLoader}>
      <p>{level}.t</p>
    </div>
  </div>;
}

BattleWidgetPlot.propTypes = {
  maxUnit: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  level: PropTypes.number
};

export default BattleWidgetPlot;