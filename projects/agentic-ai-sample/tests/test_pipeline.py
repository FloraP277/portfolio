from src.agentic_pipeline import run_batch, evaluate, retrain_needed


def test_run_batch_length():
    results = run_batch(20)
    assert len(results) == 20


def test_evaluate_metrics():
    results = run_batch(30)
    metrics = evaluate(results)
    assert "mean_score" in metrics
    assert "success_rate" in metrics


def test_retrain_trigger():
    # craft metrics to force retrain
    metrics = {"mean_score": 0.5}
    assert retrain_needed(metrics, threshold=0.65) is True
