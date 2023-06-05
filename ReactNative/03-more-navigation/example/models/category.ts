class Category {
  id: string
  title: string
  color: string
  constructor(id: string, title: string, color:string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export interface CategoryType {
  id: string
  title: string
  color: string
}

export default Category;
