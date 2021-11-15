class FurnitureGridComponent {
    constructor (){
        this.state = {
            loading : false,
            furniture :[]
        }

        this.init();
    }

    fetchFurniture = () => API.fetchFurniture(this.saveFurniture, this.showError);

    saveFurniture = (furniture) => {
        this.state.furniture = furniture;
        this.state.loading = false;

        this.render();
    }

    showError = (err) => alert(err);

    wrapColumn = (element) => {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;
      }

    init = () => {
        this.state.loading = true;
        this.fetchFurniture();

        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-4'
        this.render ();
    }

    render = () => {
        const {loading, furniture} = this.state;
        if (loading) {
            this.htmlElement.innerHTML = '<div class= "text-center"><img src="assets/loading.gif"/</div>';
        } else if (furniture.length > 0) {
            this.htmlElement.innerHTML = '';
            const furnitureElement = furniture
            .map (x =>new FurnitureCardComponent(x))
            .map (x => x.htmlElement)
            .map (this.wrapColumn)
            this.htmlElement.append(...furnitureElement);
        } else {
            this.htmlElement.innerHTML= '<h2>Šiuo metu baldų neturime</h2>';
        }
        }
}