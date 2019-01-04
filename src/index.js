import React from 'react'
import ReactDOM from 'react-dom'
import  Welcome  from './welcomecomponent';
import Community from './community';
import Review from './component/reviewComponent';
import Lifecycle from './lifecycle/lifecycle';
import RestAPI from './remotedata/remotedata';




var location= document.getElementById('home')
var loc2= document.getElementById('day2')
var loc3= document.getElementById('lifecycle')
var loc4= document.getElementById('remotedata')


ReactDOM.render(
    <div>
        <Welcome msg='namaskara' city='karnataka'>Banglore</Welcome>
        <Welcome msg='vanakam' city='tamilnadu'>chennai</Welcome>
        <Welcome msg='namaskaram' city='andhra'>amaravati</Welcome>
        <Community></Community>
    </div> 
,location)

ReactDOM.render(
            <div>
                <div>
                    <Review title="abe" Rating="5" desc="ajhskj"></Review>
                    <Review title="sd" Rating="6" desc="ghjgjh"></Review>
                    <Review title="absde" Rating="9" desc="ajdfdghskj"></Review>
                    <Review title="avvbe" Rating="10" desc="dfgd"></Review>
                </div>
                <div>
                   
                    </div>
                    </div>,
                    loc2


)

ReactDOM.render(
        <div>
            <Lifecycle></Lifecycle></div>

        ,document.getElementById('loc3')
        )

ReactDOM.render(
        <div>
            <RestAPI></RestAPI>

        </div>,loc4

)




