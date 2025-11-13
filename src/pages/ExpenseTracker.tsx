import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus, Wallet } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { useToast } from "@/hooks/use-toast";

interface Expense {
  id: number;
  category: string;
  amount: number;
  description: string;
}

const ExpenseTracker = () => {
  const [budget, setBudget] = useState<number>(10000);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { toast } = useToast();

  const categories = ["Food", "Transport", "Hotel", "Shopping", "Entry Fees", "Other"];

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = budget - totalSpent;

  const addExpense = () => {
    if (!category || !amount || !description) {
      toast({
        title: "Missing Information",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      category,
      amount: parseFloat(amount),
      description,
    };

    setExpenses([...expenses, newExpense]);
    setCategory("");
    setAmount("");
    setDescription("");

    toast({
      title: "Expense Added",
      description: `Added ₹${amount} to ${category}`,
    });
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    toast({
      title: "Expense Deleted",
      description: "Expense removed from tracker",
    });
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Expense Tracker</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep track of your trip expenses and stay within budget
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Budget Overview */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-primary" />
                  Budget Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="budget">Total Budget (₹)</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(parseFloat(e.target.value) || 0)}
                    className="mt-2"
                  />
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Budget:</span>
                    <span className="font-semibold">₹{budget.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Spent:</span>
                    <span className="font-semibold text-destructive">₹{totalSpent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Remaining:</span>
                    <span className={remaining >= 0 ? "text-green-600" : "text-red-600"}>
                      ₹{remaining.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Budget Used</span>
                    <span>{budget > 0 ? ((totalSpent / budget) * 100).toFixed(1) : 0}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        (totalSpent / budget) * 100 > 90 ? "bg-destructive" : "bg-primary"
                      }`}
                      style={{ width: `${Math.min((totalSpent / budget) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add Expense Form */}
            <Card>
              <CardHeader>
                <CardTitle>Add Expense</CardTitle>
                <CardDescription>Track a new expense</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category" className="mt-2">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="What was this for?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Button onClick={addExpense} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Expense
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Expenses List */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Expense History</CardTitle>
              <CardDescription>All your tracked expenses</CardDescription>
            </CardHeader>
            <CardContent>
              {expenses.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Wallet className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No expenses tracked yet</p>
                  <p className="text-sm mt-2">Add your first expense to get started</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {expenses.map((expense) => (
                    <div
                      key={expense.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{expense.description}</span>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            {expense.category}
                          </span>
                        </div>
                        <div className="text-xl font-bold text-primary">
                          ₹{expense.amount.toLocaleString()}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteExpense(expense.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default ExpenseTracker;
