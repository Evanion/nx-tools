/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ConfigurationGeneratorSchema {
  /**
   * The name of the project to add the Container setup to.
   */
  project: string;
  /**
   * Provide the container engine to be used.
   */
  engine?: 'docker' | 'podman' | 'kaniko';
  /**
   * Which type of app you are building?.
   */
  template?: 'empty' | 'nest' | 'next' | 'nginx';
  /**
   * Skips formatting the workspace after the generator completes.
   */
  skipFormat?: boolean;
}
