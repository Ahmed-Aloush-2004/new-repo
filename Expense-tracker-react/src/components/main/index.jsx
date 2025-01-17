import {
  Button,
  Flex,
  Heading,
  useDisclosure,
  useModal,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import TransactionForm from "../add-transaction";
import { isPending } from "@reduxjs/toolkit";
import { GlobalContext } from "../../context";

function Main() {
  const { onClose, isOpen, onOpen } = useDisclosure();

  const {
    setTotalExpense,
    allTransactions,
    totalExpense,
    setTotalIncome,
    totalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income += parseFloat(item.amount))
        : (expense += parseFloat(item.amount));
    });
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
        <ExpenseView 
        
        data={allTransactions.filter((item) => item.type === "income")}
        type={"income"}
        
        />
      </Flex>
    </Flex>
  );
}

export default Main;
