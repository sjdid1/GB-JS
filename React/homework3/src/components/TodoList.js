import React, { useState } from "react";
import { TextField, Button, Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const inputNewTask = (e) => {
        setNewTask(e.target.value);
    };

    const addNewTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div style={{ width: "50%", margin: "0 auto" }}>
            <TextField
                value={newTask}
                onChange={inputNewTask}
                label="Input your task"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button onClick={addNewTask} variant="contained" color="warning">
                Add Task
            </Button>
            {tasks.map((task, i) => (
                <Card key={i} variant="contained" style={{ marginTop: "2rem" }}>
                    <CardContent>
                        <Typography>{task}</Typography>
                        <IconButton onClick={() => deleteTask(i)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
