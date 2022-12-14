<div className= 'dropdown-menu'>
                <ul>
                    <DropdownItems
                    img = { menuLogo }
                    text = 'accueil'
                    link = '#'
                     />
                     <DropdownItem
                    img = { menuGalery }
                    text = 'Gallerie'
                    link ='#'
                     />
                </ul>
            </div>
        </div>
    );
};

function DropdownItem(props) {
    return(
        <li className ='dropdownItem'>
            <img src= { props.img } alt= 'logo maison qui est le menu'></img>
            <a href = { link }> { props.text }</a>
        </li>
    )
}