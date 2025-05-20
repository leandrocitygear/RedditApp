export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: 'dist'
  }
})
