<template lang="">
    <div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nama</th>
            <th scope="col">Brand</th>
            <th scope="col">Deskription</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
            <th scope="row">1</th>
            <td>{{product.name}}</td>
            <td>{{product.brand}}</td>
            <td>{{product.description}}</td>
            <td>
              <botten class='btn badge bg-primary' @click="detailProduct(product.id)">Detail</botten>
              <botten class='btn badge bg-danger' @click="deleteProduct(product.id)">Hapus</botten>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Product",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get("producks");
        // const response = await axios({
        //   url: "http://127.0.0.1:3000",
        //   method: "GET",
        // });
        this.products = response.data;
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    deleteProduct(id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal({
            text: "Hello world!",
          });
          console.log(id);
        }
        // else {
        //   swal("Your imaginary file is safe!");
        // }
      });
      // try {
      //   const response = await axios.delete(`producks/${id}`);
      //   this.getProducts();
      // } catch (error) {
      //   console.log(error);
      // }
    },
  },
};
</script>
<style lang="">
</style>