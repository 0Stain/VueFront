<template>
<div class="container">
   <div class="row">
    <div class="col-md-6">

            <div class="alert alert-danger mt-4" v-if="errors.length">
            <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                {{ error }}
                </li>
            </ul>
            </div>


        <form>
            <fieldset>
                
                <div class="form-group">
                    <label class="form-label mt-4">Booking Id</label>
                    <input type="text" class="form-control" v-model="id" placeholder="Enter  Id">
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">Start Date</label>
                    <input type="date" class="form-control" v-model="t_start" placeholder="Enter Start Date">
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">End Date</label>
                    <input type="date" class="form-control" v-model="t_end" placeholder="Enter End Date">
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">User Id</label>
                    <input type="text" class="form-control" v-model="user_id" placeholder="Enter User Id">
                </div>
                <div class="form-group">
                    <label class="form-label mt-4">Box Id</label>
                    <input type="text" class="form-control" v-model="box_id" placeholder="Enter Box Id">
                </div>
                <button class="btn btn-primary mt-4">Submit</button>
            </fieldset>
        </form>
    </div>
   </div>
</div>
</template>


<script>


import axios from 'axios';

export default {
    name: 'EditBooking',
    data() {
        return {
            id: '',
            t_start: '',
            t_end: '',
            user_id: '',
            box_id: '',
            errors: []
        
        }
    },

    created() {
        this.getBookingById();
    },

    methods: {

        async getBookingById() {
                
            let url= `http://127.0.0.1:8000/api/geditBooking/${this.
            $route.params.id}`;
            await axios.get(url).then(response => {
                console.log(response);
                this.booking = response.data;
            });
        }
    },
    mounted: function() {
        console.log('Edit component mounted successfully');
    }
}  
</script>


