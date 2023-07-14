class Apifeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  // note:-
  // query === Logictogettheproducts / logics in controller
  // queryStr === queryObject(?keyword=product1) pass through the requets(localhost:8080/products?keyword=product1)

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    console.log(keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }
}

module.exports = Apifeatures;
