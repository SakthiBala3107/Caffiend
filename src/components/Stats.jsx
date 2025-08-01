import { useAuth } from "../context/AuthContext";
import {
  calculateCoffeeStats,
  calculateCurrentCaffeineLevel,
  getTopThreeCoffees,
  statusLevels,
} from "../utills";

// SECONDARY COMPINENT FOR REUSABLITY
function StatCard({ lg, title, children }) {
  return (
    <div className={"card stat-card " + (lg ? "col-span-2" : "")}>
      <h4>{title}</h4>

      {children}
    </div>
  );
}

const Stats = () => {
  const { globalData } = useAuth();
  const stats = {
    daily_caffiene: 250,
    daily_cost: 6.8,
    average_coffees: 2.3,
    total_cost: 220,
  };

  const caffieneLevel = calculateCurrentCaffeineLevel(globalData);

  const warningLevel =
    caffieneLevel < statusLevels["low"].maxLevel
      ? "low"
      : caffieneLevel < statusLevels["moderate"].maxLevel
      ? "moderate"
      : "high";

  // RENDERIN-STUFFS
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-chart-simple" />
        <h2>Stats</h2>
      </div>
      <div className="stats-grid">
        <StatCard lg title="Active Caffeine Level">
          <div className="status">
            <p>
              <span className="stat-text">{caffieneLevel}</span> mg
            </p>
            <h5
              style={{
                color: statusLevels[warningLevel].color,
                background: statusLevels[warningLevel].background,
              }}
            >
              {warningLevel}
            </h5>
          </div>
          <p>{statusLevels["low"].description}</p>
        </StatCard>
        <StatCard title="Daily Caffeine">
          <p>
            <span className="stat-text">{stats.daily_caffiene}</span> mg
          </p>
        </StatCard>

        <StatCard title="Avg # of Coffees">
          <p>
            <span className="stat-text">{stats.average_coffees}</span>
          </p>
        </StatCard>
        <StatCard title="Daily Cost ($)">
          <p>
            $ <span className="stat-text">{stats.daily_cost}</span>
          </p>
        </StatCard>
        <StatCard title="Total Cost">
          <p>
            $ <span className="stat-text">{stats.daily_cost}</span>
          </p>{" "}
        </StatCard>
      </div>

      {/* TABLE */}
      <table className="stat-table">
        <thead>
          <tr>
            <th>Coffee Name</th>
            <th>Number of Purchase</th>
            <th>Percentage of Total</th>
          </tr>

          {/* <tr>Number of Purchase</tr>
          <t,r>Percentage of Total</t,r> */}
        </thead>
        <tbody>
          {getTopThreeCoffees(globalData).map((coffee, idx) => (
            <tr key={idx}>
              <td>{coffee.coffeeName}</td>
              <td>{coffee.count}</td>
              <td>{coffee.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Stats;
