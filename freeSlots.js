const { spawn } = require('child_process');

function runPythonScript() {
    // Path to your Python script
    const pythonScriptPath = 'cb.py';

    // Spawn a new Python process
    const pythonProcess = spawn('python', [pythonScriptPath]);

    // Listen for stdout data from the Python process
    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    // Listen for stderr data from the Python process
    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    // Listen for the Python process to close
    pythonProcess.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
    });
}

// Call the function to run the Python script
runPythonScript();

