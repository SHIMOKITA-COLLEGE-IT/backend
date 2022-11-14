import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationType } from '../prisma/generation-type.enum';

@InputType()
export class GenerationGenerationTypeNameFromToCompoundUniqueInput {

    @Field(() => GenerationType, {nullable:false})
    generationType!: keyof typeof GenerationType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;
}
