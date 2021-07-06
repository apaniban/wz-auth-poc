const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      <span>Username</span>
      <input type="text" name="username" required />
    </label>

    <label>
      <span>Password</span>
      <input type="password" name="password" required />
    </label>

    <button type="submit">Login</button>
  </form>
)

export default Form
