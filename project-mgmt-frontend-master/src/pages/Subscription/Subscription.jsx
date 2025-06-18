import React from 'react'
import SubscriptionCard from './SubscriptionCard'

const paidPlan =[
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advance Reporting",
    "Priority Support",
    "Customization Option",
    "Integration Support",
    "Advance Security",
    "Training and Resource",
    "Access Control",
    "Custom Workflows"
]

const annualPlan =[
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advance Reporting",
    "Priority Support",
    "Everything whihc mostly plans has"
]

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notification",
    "Basic Access Control"
]

const Subscription = () => {
  return (
    <div className='p-10'>
      <h1 className='text-5xl font-semibold py-5 pb-16 text-center'>Pricing</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
        <SubscriptionCard data={{
            planName:"Free",
            features:freePlan,
            planType:"FREE",
            price:0,
            buttonName:true?"Current Plan":"Get Started"
            }}/>
        <SubscriptionCard data={{
            planName:"Monthly Paid Plan",
            features:paidPlan,
            planType:"MONTHLY",
            price:799,
            buttonName:true?"Current Plan":"Get Started"
            }}/>
        <SubscriptionCard data={{
            planName:"Annual Paid Plan",
            features:annualPlan,
            planType:"ANNUALLY",
            price:6711,
            buttonName:true?"Current Plan":"Get Started"
            }}/>
      </div>
    </div>
  )
}

export default Subscription
