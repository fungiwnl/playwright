# TraceViewer

# Record traces

Traces are recorded on 
```
trace: 'on-first-retry'
```
 option in the test config. Which will produce trace.zip for each test that was retried. 


# Viewing the trace 

Open saved trace using Playwright CLI. Example trace.zip is checked into git as an example.

```
yarn showtrace $PWD/trace.zip
```

or in your browser on 

https://trace.playwright.dev

