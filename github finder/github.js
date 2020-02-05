class Github {
    constructor() {
        this.client_id = 'dba1223b4fa98b7874a9';
        this.client_secret = '16682e9b046123555c80fc978a59426dd5e71a7f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';


    }

    async getUser(user) {
        try {
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
            const profile = await profileResponse.json();
            const repos = await reposResponse.json();
            return {
                profile,
                repos

            }

        } catch (err) {
            alert(err);
        }

    }


}