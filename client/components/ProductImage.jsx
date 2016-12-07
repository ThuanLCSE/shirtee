import React from 'react';

class ProductImage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="hovereffect">
                    <img className="img-responsive" src="http://placehold.it/350x200" alt=""/>
                    <div className="overlay">
                       <h2>Hover effect 9</h2>
                       <a className="info" href="#">link here</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductImage;