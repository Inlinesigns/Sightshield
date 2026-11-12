param([string]$Docx, [switch]$Dotx)
$full = (Resolve-Path $Docx).Path
$pdf = [IO.Path]::ChangeExtension($full, '.pdf')
$w = New-Object -ComObject Word.Application; $w.Visible = $false
try {
  $d = $w.Documents.Open($full, $false, $true)
  $d.ExportAsFixedFormat($pdf, 17)
  "pages: " + $d.ComputeStatistics(2)
  if ($Dotx) { $d.SaveAs2([IO.Path]::ChangeExtension($full, '.dotx'), 14); "dotx saved" }
  $d.Close(0)
} finally { $w.Quit() }
