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
  