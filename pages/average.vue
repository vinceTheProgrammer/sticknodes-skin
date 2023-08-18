<template>
  <div>
    <h1>Upload and Average Files</h1>
    <p>
      <br />===================================<br />===================================<br />===================================
      {{ json1 }}
      <br />===================================<br />===================================<br />===================================<br /><br /><br />
      {{ json2 }} ================================
      <br /><br />===================================<br />===================================<br /><br /><br />
      {{ averagedJSON
      }}<br />===================================<br />===================================<br />===================================
      <br /><br /><br />
    </p>

    <input type="file" @change="onFileChange(1)" accept=".nodes" />
    <input type="file" @change="onFileChange(2)" accept=".nodes" />

    <button @click="averageFiles" :disabled="!file1 || !file2">
      Average Files
    </button>

    <a v-if="averagedFile" :href="averagedFile" download="averaged_file.nodes"
      >Download Averaged File</a
    >
  </div>
</template>

<script lang="ts">
import { Buffer } from "buffer";
import {
  nodesToJSO,
  jsoToNodes,
  objectAverage,
  updateDrawOrdersInObject,
} from "~/.nuxt/imports";
import { CustomFileType } from "~/types/nodes";

export default {
  data() {
    return {
      file1: null as File | null,
      file2: null as File | null,
      averagedFile: null as string | null,
      json1: null as unknown as CustomFileType,
      json2: null as unknown as CustomFileType,
      averagedJSON: null as unknown as CustomFileType,
    };
  },
  methods: {
    onFileChange(fileIndex: number) {
      const input = event!.target as HTMLInputElement;
      const file = input.files![0];

      if (fileIndex === 1) {
        this.file1 = file;
      } else if (fileIndex === 2) {
        this.file2 = file;
      }
    },
    async averageFiles() {
      if (!this.file1 || !this.file2) {
        return;
      }

      const file1Data = await this.readFile(this.file1);
      const file2Data = await this.readFile(this.file2);

      this.json1 = nodesToJSO(file1Data);
      this.json2 = nodesToJSO(file2Data);

      this.averagedJSON = objectAverage(this.json1, this.json2);

      this.averagedJSON = updateDrawOrdersInObject(this.averagedJSON);

      const averagedFileData = jsoToNodes(this.averagedJSON);

      const blob = new Blob([averagedFileData], {
        type: "application/octet-stream",
      });
      this.averagedFile = URL.createObjectURL(blob);
    },
    readFile(file: File): Promise<Buffer> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          const buffer = Buffer.from(arrayBuffer);
          resolve(buffer);
        };

        reader.onerror = () => {
          reject(new Error("Error reading file."));
        };

        reader.readAsArrayBuffer(file);
      });
    },
  },
};
</script>
