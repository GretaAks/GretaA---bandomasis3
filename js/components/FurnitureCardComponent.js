class FurnitureCardComponent {
    constructor (props) {
        this.props= props;

        this.init();
    }

    init = () => {
        const {title,type,price,location,owner,imgSrc,onDelete} = this.props;
        const {country,city,street} = location;
        const {fullname,mobile,address,email} = owner;


        this.htmlElement = document.createElement('article');
        this.htmlElement.className = ' card p-2 shadow';
        this.htmlElement.innerHTML= `
        <div class="card" >
        <img src="${imgSrc}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${price} €</p>
        </div>
        <div class= "p-2">
            <div class="fw-light">${type}</div>
            <div >
            <div><strong>Rasite adresu:</strong></div>
            <ul>
            <li >${country}</li>
            <li >${city}</li>
            <li >${street}</li>
            </ul>
            </div>
            <hr>
            <div >
            <div><strong>Savininkas:</strong></div>
            <ul>
            <li >${fullname}</li>
            <li >${mobile}</li>
            <li >${address}</li>
            <li >${email}</li>
            </ul>
            </div>
        </div>
    <div class="card-body text-center">
    <button class="btn btn-success">Ištrinti</button>
        </div>
    </div>
        `;
    const btn = this.htmlElement.querySelector('.btn');
    btn.addEventListener('click', onDelete);

    }
}