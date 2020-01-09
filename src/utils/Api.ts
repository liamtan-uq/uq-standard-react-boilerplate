class Api {

    doRequest() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    id: 0,
                    name: "Liam Tan"
                },
                {
                    id: 1,
                    name: "Bob Saget"
                },
                {
                    id: 2,
                    name: "Gordon Ramsay"
                },
            ]);
        })
    }

    getUsers() {
        return this.doRequest();
    }

}

export default new Api();