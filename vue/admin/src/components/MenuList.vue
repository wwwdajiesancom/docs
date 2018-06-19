<template>
    <div>
        <table>
            <tr>
               <td v-for="(item,index) in routers_names" :key="index">
                   <router-link :to="item.path" :key="index">{{item.name}}</router-link>
                </td>
            </tr>
        </table>
    </div>    
</template>
<script>
import {Routers} from '@/router/router';
export default{
    name:'menu_list',
    data(){
        return {
            routers_names:[...Routers],
        }
    }
}
</script>
<style>

</style>
