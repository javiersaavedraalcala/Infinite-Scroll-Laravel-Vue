<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-3 mt-3" v-for="item in list" :key="item.id">
                <div class="card-header">
                    <router-link :to="{name: 'post', params: {slug: item.slug}}" v-text="item.title"></router-link>
                </div>
                <div class="card-body">
                    <p>ID: {{ item.id }}</p>
                    <p class="card-text" v-text="item.excerpt"></p>
                </div>
            </div>

            <infinite-loading-component @infinite="infiniteHandler">
                <div slot="no-more">--</div>
                <div slot="spinner">Cargando...</div>
                <div slot="no-results">Sin resultados</div>
            </infinite-loading-component>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                page: 0,
            }
        },
        methods: {
            infiniteHandler($state) {
                this.page++;
                let url = 'http://127.0.0.1:8000/api/posts?page='+this.page;

                axios.get(url)
                .then(response => {
                    let posts = response.data.data;

                    if(posts.length) {
                        this.list = this.list.concat(posts);
                        $state.loaded();
                    }else {
                        $state.complete(); 
                    }

                });
            }
        }
    }
</script>
