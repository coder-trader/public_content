# Makefile to run a simple Python HTTP server
# Usage:
#   make serve        - run server in foreground on PORT (default 8000)
#   make serve-bg     - run server in background and save PID to server.pid
#   make stop         - stop background server started with serve-bg
#   make open         - open http://localhost:PORT in the default browser

PYTHON ?= python3
PORT ?= 8000
HOST ?= 0.0.0.0

.PHONY: serve serve-bg stop open help

help:
	@echo "Makefile targets:"
	@echo "  make serve      - start Python HTTP server on $(HOST):$(PORT)"
	@echo "  make serve-bg   - start server in background and write PID to server.pid"
	@echo "  make stop       - stop background server started with serve-bg"
	@echo "  make open       - open http://localhost:$(PORT) in default browser"

serve:
	@echo "Starting server at http://$(HOST):$(PORT)"
	$(PYTHON) -m http.server $(PORT) --bind $(HOST)

serve-bg:
	@nohup $(PYTHON) -m http.server $(PORT) --bind $(HOST) >/dev/null 2>&1 & echo $$! > server.pid; echo "Server started (PID $$(cat server.pid))"

stop:
	@if [ -f server.pid ]; then kill $$(cat server.pid) && rm -f server.pid && echo "Stopped server"; else echo "server.pid not found; no PID to stop"; fi

open:
	@xdg-open http://localhost:$(PORT) >/dev/null 2>&1 || open http://localhost:$(PORT) || true
