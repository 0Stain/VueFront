<template>
<div class="container">
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">User Id</th>
                <th scope="col">Box Id</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody v-for="booking in bookings" :key="booking.id">
            <tr class="table-secondary">
                <th scope="row">{{ booking.id }}</th>
                <th scope="row">{{ booking.t_start }}</th>
                <th scope="row">{{ booking.t_end }}</th>
                <th scope="row">{{ booking.user_id }}</th>
                <th scope="row">{{ booking.box_id }}</th>
                <th scope="row"><button class="alert alert-danger btn-sm" @click.
                prevent="deleteBooking(booking.id)">Delete Booking</button></th>
            </tr>
        </tbody>
    </table>
    
</div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'BookingsList',
    data() {
        return {
            bookings:Array,
        }
    },
    created() {
        this.getBookings();
    },
    methods: {
        async getBookings()  {
            let url = 'http://127.0.0.1:8000/api/getBookings';
            await axios.get(url).then(response => {
                this.bookings = response.data;
                console.log(this.bookings);
            }).catch(console.error());
        }
    },
    async deleteBooking(id) {
        alert(id);
    },
    mounted() {
        console.log('Bookings list Component mounted');
    }
} 
</script>


