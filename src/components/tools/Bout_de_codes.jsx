const CharlesCantinTarifs = () => {
    return (
      <div className="pageFormat">
        <SmallCharlesCantinLogo />
        <TitleBar title="Tarifs" />
        <div className="mainContainertarifs">
          <div className="containertarifs">
            <PriceGalery
              src={cantinPrices[0].Picture1Price}
              alt="famille dans un parc arborré"
              className="priceGaleryTarif"
            />
            <PriceGalery
              src={cantinPrices[cantinPrices.length - 1].Picture1Price}
              alt="famille dans un parc arborré"
              className="priceGaleryTarif"
            />
            {cantinPrices.map((item) => (
              <PriceGalery
                src={item.Picture1Price}
                alt="famille dans un parc arborré"
                className="priceGaleryTarif"
              />
            ))}
            {cantinPrices.map((item) => {
              const formatedPrice = item.pricePrice + "€";
              return (
                <>
                  <PriceGalery
                    src={item.Picture1Price}
                    alt="famille dans un parc arborré"
                    className="priceGaleryTarif"
                  />
                  <p>{formatedPrice}</p>
                </>
              );
            })}
  
            <div className="container-col">
              <span>NOUS DEUX</span>
              <span>Scéance photo pour couple en exterieur ou en studio</span>
            </div>
            <p>130€</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CharlesCantinTarifs;
  
//----------------------------------------------------------------------
  import React from "react";
  import CardArticle from "./CardArticle";

  function ListArticles(props) {
    if (!props) {
      return (
        <div>
          <h1>Pas d'article</h1>
        </div>
      );
    } else {
      const articlesListing = props.articles.map((article) => (
        <CardArticle name={article.name} price={article.price} />
      ));
      return <div>{articlesListing}</div>;
    }
  }
  
  

//-----------------------------------------------------------------------
  
function MariagePage() {
  return (
    <div>
      <div className="pageFormat">
        <SmallCharlesCantinLogo />
        <TitleBar title="Mariage" />
      </div>
      <div>
        {cantinPictures.map((cantinPicture) =>
          cantinPicture.map((item) => {
            let expo= item
            console.log(expo);
            return (
              <Mariage
                src={item.picture}
                alt={item.description}
                h2={item.pictitle}
              />
            );
          })
        )}
      </div>
    </div>
  );
}