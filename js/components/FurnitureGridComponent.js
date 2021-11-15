class FurnitureGridComponent {
    constructor (){
        this.state = {
            loading : false,
            furniture :[]
        }

        this.init();
    }

    fetchFurniture = () => {
        API.fetchFurniture(
            (furniture) => {
              this.state.loading = false;
              this.saveFurniture(furniture);
            },
            (err) => {
              alert(err);
              this.state.loading = false;
              this.render();
            }
          )
        }

    saveFurniture = (furniture) => {
        this.state.furniture = furniture;

        this.render();
    }

    showError = (err) => alert(err);

    wrapColumn = (element) => {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;
      }

      deleteFurniture = (id) => {
          API.deleteFurniture(
              id,
              () => API.fetchFurniture(this.saveFurniture,alert),
              alert
          );
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
            .map(({ id, ...props }) => new FurnitureCardComponent({
                ...props,
                onDelete: () => this.deleteFurniture(id)
              }))
            .map (x => x.htmlElement)
            .map (this.wrapColumn)
            this.htmlElement.append(...furnitureElement);
        } else {
            this.htmlElement.innerHTML= '<h2>Šiuo metu baldų neturime</h2>';
        }
        }
}