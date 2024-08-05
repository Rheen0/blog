function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://fictionhorizon.com/wp-content/uploads/2022/11/Pochita.jpg"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>POCHITA</h2>
        <p className="info">
          <a href="#" className="author">
            Rhandie Sales
          </a>
          <time>2024-05-08 11:06</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          incidunt impedit aperiam minus doloremque, quaerat sequi soluta iusto
          voluptate qui delectus reiciendis tempore, illo saepe eius inventore.
          Accusantium, esse dicta.
        </p>
      </div>
    </div>
  );
}

export default Post;
