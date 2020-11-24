export default class App extends Component {
    state = {
      employees: [],
      filteredEmployees: [],
      searchTerm: "",
      sortState: ""
  
    }
    componentDidMount = () => {
      API.getEmployeeList().then(employees => {
        this.setState({ employees: employees.data.results, filteredEmployees: employees.data.results })
      });
    }
    nameOnClick = () => {
      let newFilteredEmployees;
      if (this.state.sortState != "sortedAlpha") {
        newFilteredEmployees = this.state.filteredEmployees.sort(this.sortLastAlpha);
        this.setState({ sortState: "sortedAlpha" })
      } else {
        newFilteredEmployees = this.state.filteredEmployees.sort(this.sortLastAlpha).reverse();
        this.setState({ sortState: "sortedAlphaReverse" })
      }
  
      this.setState({ filteredEmployees: newFilteredEmployees })
    }
    