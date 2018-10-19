export default {
    data() {
        return {
          search: "",
          names: ["Darek", "Jarek", "Zosia", "Gosia"]
        };
      },
      computed: {
        filteredNames() {
          return this.names.filter(name => {
            return name.toLowerCase().indexOf(this.search) !== -1;
          });
        }
      }
}