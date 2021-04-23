return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a Friend</h2>
  
        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>
  
      <div className="form-group inputs">
        <h4>General information</h4>
  
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>
          Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name="Pizza"
            type="text"
          />
        </label>
  
        <label>
          Email
          <input
            value={values.pizza}
            onChange={onChange}
            name="Pizza"
            type="text"
          />
        </label>
  
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>
          Role
          <select onChange={onChange} value={values.role} name="role">
            <option value="">- Select an option -</option>
            <option value="pizza one">Pizza One</option>
            <option value="pizza two">Pizza Two</option>
    
          </select>
        </label>
  
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>
          Pizza One
          <input
            type="radio"
            name="Pizza One"
            value="Pizza"
            checked={values.pizza === "Pizza"}
            onChange={onChange}
          />
        </label>
  
        <label>
          Pizza Two
          <input
            type="radio"
            name="Pizza Two"
            value="Pizza"
            checked={values.pizza === "Pizza"}
            onChange={onChange}
          />
        </label>
      </div>
  
      <div className="form-group checkboxes">
        <h4>Toppings</h4>
  
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>
  
        <label>
          Pineapple
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>
  
        <label>
          Goat Cheese
          <input
            type="checkbox"
            name="Goat Cheese"
            checked={values.goatcheese}
            onChange={onChange}
          />
        </label>
        <label>
          Onions
          <input
            type="checkbox"
            name="Onions"
            checked={values.onions}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
  }
  
  {/* 
  name: string,
  size: string,
  topping1: bool,
  topping2: bool,
  special: string, */}