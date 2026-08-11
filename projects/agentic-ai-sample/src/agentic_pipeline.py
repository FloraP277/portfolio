"""Minimal agentic pipeline simulation.

Run with:
    python -m src.agentic_pipeline --num-agents 50
"""
import argparse
import random
import statistics
from dataclasses import dataclass
from typing import List


@dataclass
class AgentResult:
    agent_id: int
    success: bool
    score: float


def run_agent(agent_id: int) -> AgentResult:
    # Simulated agent: random performance with slight variability
    base = random.gauss(0.7, 0.08)  # mean performance
    # Introduce some failing agents
    if random.random() < 0.08:
        base -= random.uniform(0.15, 0.4)
    score = max(0.0, min(1.0, base))
    success = score > 0.5
    return AgentResult(agent_id=agent_id, success=success, score=score)


def run_batch(num_agents: int) -> List[AgentResult]:
    return [run_agent(i) for i in range(num_agents)]


def evaluate(results: List[AgentResult]) -> dict:
    scores = [r.score for r in results]
    success_rate = sum(1 for r in results if r.success) / max(1, len(results))
    return {
        "count": len(results),
        "mean_score": statistics.mean(scores) if scores else 0.0,
        "median_score": statistics.median(scores) if scores else 0.0,
        "success_rate": success_rate,
    }


def retrain_needed(metrics: dict, threshold: float = 0.65) -> bool:
    return metrics.get("mean_score", 0.0) < threshold


def retrain():
    # Placeholder for retraining logic (retrain model, bump version, run tests)
    print("Retraining triggered: running training job (placeholder)...")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--num-agents", type=int, default=100)
    parser.add_argument("--threshold", type=float, default=0.65)
    args = parser.parse_args()

    print(f"Running {args.num_agents} agent simulations...")
    results = run_batch(args.num_agents)
    metrics = evaluate(results)
    print(f"Metrics: {metrics}")

    if retrain_needed(metrics, threshold=args.threshold):
        retrain()
    else:
        print("No retraining needed.")


if __name__ == "__main__":
    main()
