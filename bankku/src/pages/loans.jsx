import LoanCard from "../components/ui/loanCard";
import Title from "../components/ui/title";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";

const loanOptions = [
  { title: "Personal Loans", amount: "50,000" },
  { title: "Corporate Loans", amount: "100,000" },
  { title: "Business Loans", amount: "500,000" },
  { title: "Custom Loans", amount: "Choose Money" },
];
const loans = [
  {
    loanMoney: "1000000",
    leftToRepay: "40500",
    Duration: "8",
    InterestRate: "12",
    Installment: "2000",
  },
  {
    loanMoney: "500000",
    leftToRepay: "250000",
    Duration: "36",
    InterestRate: "10",
    Installment: "8000",
  },
  {
    loanMoney: "900000",
    leftToRepay: "40500",
    Duration: "12",
    InterestRate: "12",
    Installment: "5000",
  },
  {
    loanMoney: "50000",
    leftToRepay: "40500",
    Duration: "25",
    InterestRate: "5",
    Installment: "2000",
  },
  {
    loanMoney: "50000",
    leftToRepay: "40500",
    Duration: "5",
    InterestRate: "16",
    Installment: "10000",
  },
  {
    loanMoney: "80000",
    leftToRepay: "25500",
    Duration: "14",
    InterestRate: "8",
    Installment: "2000",
  },
  {
    loanMoney: "12000",
    leftToRepay: "5500",
    Duration: "9",
    InterestRate: "13",
    Installment: "500",
  },
  {
    loanMoney: "160000",
    leftToRepay: "100800",
    Duration: "3",
    InterestRate: "12",
    Installment: "900",
  },
];

const formatNumber = (num) => num.toLocaleString("en-US");
let totalLoanMoney = 0;
let totalLeftToRepay = 0;
let totalInstallment = 0;

loans.forEach((loan) => {
  totalLoanMoney += Number(loan.loanMoney);
  totalLeftToRepay += Number(loan.leftToRepay);
  totalInstallment += Number(loan.Installment);
});
function Loans() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="md:grid grid-cols-4 gap-[25px] hidden">
          {loanOptions.map((item, idx) => (
            <LoanCard key={idx} title={item.title} amount={item.amount} />
          ))}
        </div>
        <div className="md:flex flex-col gap-[15px] hidden">
          <Title title={"Active Loans Overview"}></Title>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[20px] pl-2">SL No</TableHead>
                <TableHead className="pl-5">Loan Money</TableHead>
                <TableHead className="pl-5">Left to repay</TableHead>
                <TableHead className="pl-5">Duration</TableHead>
                <TableHead className="pl-5">Interest rate</TableHead>
                <TableHead className="pl-5">Installment</TableHead>
                <TableHead className="pl-5">Repay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loans.map((loan, index) => (
                <TableRow key={loans.loans}>
                  <TableCell className="w-[20px] pl-2">
                    {String(index + 1).padStart(2, "0")}.
                  </TableCell>
                  <TableCell className="pl-5">
                    ${Number(loan.loanMoney).toLocaleString("en-US")}
                  </TableCell>
                  <TableCell className="pl-5">
                    ${Number(loan.leftToRepay).toLocaleString("en-US")}
                  </TableCell>
                  <TableCell className="pl-5">{loan.Duration} Months</TableCell>
                  <TableCell className="pl-5">{loan.InterestRate}%</TableCell>
                  <TableCell className="pl-5">
                    ${Number(loan.Installment).toLocaleString("en-US")} / month
                  </TableCell>
                  <TableCell className="">
                    <Button
                      variant={"outline"}
                      className="text-[#232323] hover:text-[#1814F3] rounded-full w-[100px] hover:bg-accent"
                    >
                      Repay
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={0}>Total</TableCell>
                <TableCell className="pl-5">
                  ${formatNumber(totalLoanMoney)}
                </TableCell>
                <TableCell className="pl-5">
                  ${formatNumber(totalLeftToRepay)}
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell className="pl-5" colSpan={2}>
                  ${formatNumber(totalInstallment)} / month
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div className="flex flex-col gap-3 md:hidden max-w-[362px]">
          <div className="md:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 min-w-[520px] w-max">
              <div className="md:hidden grid grid-cols-4 gap-[25px]">
                {loanOptions.map((item, idx) => (
                  <LoanCard key={idx} title={item.title} amount={item.amount} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] md:hidden w-full">
          <Title title={"Active Loans Overview"}></Title>
          <Table className="w-full table-fixed">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">Loan Money</TableHead>
                <TableHead className="w-[60px]">Left to repay</TableHead>
                <TableHead className="w-[50px]">Repay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loans.map((loan, index) => (
                <TableRow key={loans.loans}>
                  <TableCell className="w-[60px]">
                    ${Number(loan.loanMoney).toLocaleString("en-US")}
                  </TableCell>
                  <TableCell className="w-[60px]">
                    ${Number(loan.leftToRepay).toLocaleString("en-US")}
                  </TableCell>

                  <TableCell className="w-[50px]">
                    <Button
                      variant={"outline"}
                      className="text-[#232323] hover:text-[#1814F3] rounded-full xl:w-[100px] xl:text-[15px] text-xs md:w-[80px] w-[70px] hover:bg-accent"
                    >
                      Repay
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={0}>
                  Total <br />${formatNumber(totalLoanMoney)}
                </TableCell>
                <TableCell className="align-bottom">
                  ${formatNumber(totalLeftToRepay)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Loans;
