"use client"
import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [mortgageRate, setMortgageRate] = useState(0);
  const [payingYears, setPayingYears] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number|string>("");

  const handleLoanAmount = (event:any) => { setLoanAmount(event.target.valueAsNumber) }
  const handleMortgageRate = (event:any) => { setMortgageRate(event.target.valueAsNumber) }
  const handlePayingYears = (event:any) => { setPayingYears(event.target.valueAsNumber) }

  useEffect(() => {
    if ([loanAmount, mortgageRate, payingYears].some( element => isNaN(element))) {
      setMonthlyPayment("");
    } else if ([loanAmount, mortgageRate, payingYears].every( element => element > 0)) {
      let monthlyInterest = (mortgageRate/100)/12;
      let paymentsNumber = payingYears*12;
      let payment = (loanAmount * (monthlyInterest * Math.pow(1+monthlyInterest, paymentsNumber))) / (Math.pow(1+monthlyInterest, paymentsNumber)-1);

      setMonthlyPayment(payment.toFixed(2));
    }
 });

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center py-3">Mortgage Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="loanAmount">Loan amount</Label>
              <Input
                id="loanAmount"
                type="number" min="1"
                placeholder="Amount of the mortgage"
                onChange={handleLoanAmount}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mortgageRate">Mortgage rate</Label>
              <Input
                id="mortgageRate"
                type="number" min="1"
                placeholder="Annual interest rate"
                onChange={handleMortgageRate}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="payingYears">Years to pay</Label>
              <Input
                id="payingYears"
                type="number" min="1"
                placeholder="Loan term in years"
                onChange={handlePayingYears}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Label className="py-3">Monthly mortgage payment: {monthlyPayment}</Label>
      </CardFooter>
    </Card>
  )
}
