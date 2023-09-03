document.addEventListener("click", (event) => {
  const eventType = event.target.dataset.type;
  if (eventType === "remove") {
    const id = event.target.dataset.id;
    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  } else if (eventType === "edit") {
    const id = event.target.dataset.id;
    const txt = event.target.closest("li").querySelector("p").textContent;
    const newTask = prompt("Edit your task", txt);
    if (newTask) {
      edit(id, newTask).then(() => {
        const txt = (event.target.closest("li").querySelector("p").textContent =
          newTask);
      });
    }
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}

async function edit(id, task) {
  await fetch(`/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Указываем тип контента как JSON
    },
    body: JSON.stringify({ task }),
  });
}
