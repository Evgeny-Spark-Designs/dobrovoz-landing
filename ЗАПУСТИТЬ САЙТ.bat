@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Запуск лендинга "Европа - РФ" ...
start "" http://localhost:8935/
python _serve.py 8935
pause
