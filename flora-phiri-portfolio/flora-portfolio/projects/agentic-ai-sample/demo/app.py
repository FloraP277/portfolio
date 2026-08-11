import streamlit as st
from src.agentic_pipeline import run_batch, evaluate, retrain_needed

st.set_page_config(page_title="Agentic AI Demo", layout="centered")
st.title("Agentic AI Pipeline — Demo")

num_agents = st.slider("Number of agents", min_value=10, max_value=1000, value=100, step=10)
threshold = st.slider("Retraining threshold (mean score)", min_value=0.0, max_value=1.0, value=0.65, step=0.01)

if st.button("Run simulation"):
    results = run_batch(num_agents)
    metrics = evaluate(results)
    st.metric("Mean score", f"{metrics['mean_score']:.3f}")
    st.metric("Success rate", f"{metrics['success_rate']*100:.1f}%")

    # show a small sample table
    sample = sorted(results, key=lambda r: r.score, reverse=True)[:10]
    st.write("Top 10 agent scores")
    st.table([{"agent_id": r.agent_id, "score": f"{r.score:.3f}"} for r in sample])

    if retrain_needed(metrics, threshold=threshold):
        st.warning("Retraining would be triggered for these metrics.")
    else:
        st.success("No retraining needed.")
else:
    st.write("Configure parameters and click 'Run simulation' to execute the pipeline.")
