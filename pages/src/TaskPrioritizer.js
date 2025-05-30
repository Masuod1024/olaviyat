import { useState } from "react";

export default function TaskPrioritizer() {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(false);
  const [longTermImpact, setLongTermImpact] = useState(false);
  const [dependentPeople, setDependentPeople] = useState(false);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const prioritizeTask = () => {
    let score = 0;
    if (deadline) score += 1;
    if (longTermImpact) score += 2;
    if (dependentPeople) score += 1;

    let outcome = "";
    if (score >= 3) outcome = "📌 A (خیلی مهم و فوری)";
    else if (score === 2) outcome = "🔶 B (مهم ولی شاید فوری نباشه)";
    else if (score === 1) outcome = "🔷 C (فقط فوری یا کم‌اهمیت)";
    else outcome = "⭕ E (حذف یا نادیده گرفته شود)";

    setResult(outcome);

    const newEntry = {
      task,
      outcome,
      date: new Date().toLocaleString("fa-IR"),
    };
    setHistory([newEntry, ...history]);
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>🎯 اولویت‌یار</h2>
      <input
        placeholder="تسک را وارد کن..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ display: "block", marginBottom: 8 }}
      />
      <label>
        <input
          type="checkbox"
          checked={deadline}
          onChange={() => setDeadline(!deadline)}
        />
        آیا کار ددلاین دارد؟
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={longTermImpact}
          onChange={() => setLongTermImpact(!longTermImpact)}
        />
        آیا به هدف بلندمدت کمک می‌کند؟
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={dependentPeople}
          onChange={() => setDependentPeople(!dependentPeople)}
        />
        آیا کسی منتظر انجام این کار است؟
      </label>
      <br />
      <button onClick={prioritizeTask}>تحلیل کن</button>
      <br />
      {result && <p>نتیجه: {result}</p>}
      {history.length > 0 && (
        <>
          <h4>📜 تاریخچه:</h4>
          <ul>
            {history.map((item, idx) => (
              <li key={idx}>
                📝 {item.task} — {item.outcome} ({item.date})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
  }
